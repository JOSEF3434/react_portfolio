import { useState } from "react";
import Link from "./Link";

const CloudinaryUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  // Replace with your own details
  const CLOUD_NAME = "dhpfzwhom";
  const UPLOAD_PRESET = "fethaihompage";

  const isImage = (type) => type?.startsWith("image");
  const isVideo = (type) => type?.startsWith("video");
  const isPdf = (type) => type === "application/pdf";
  const isDoc = (type) =>
    type === "application/msword" ||
    type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    type === "text/plain";
  const isZip = (type) =>
    type === "application/zip" ||
    type === "application/x-zip-compressed" ||
    type === "application/x-7z-compressed" ||
    type === "application/x-rar-compressed";

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      if (isImage(selected.type) || isVideo(selected.type)) {
        setPreview(URL.createObjectURL(selected));
      } else {
        setPreview("");
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      // Choose Cloudinary resource type based on selected file
      const type = file.type || "";
      const resourceType = isImage(type)
        ? "image"
        : isVideo(type)
        ? "video"
        : "raw"; // PDFs, docs, and other files

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setUploadedUrl(data.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white text-center">
      <h2 className="text-xl font-semibold mb-4">Upload to Cloudinary</h2>

      <input
        type="file"
        accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/zip,application/x-zip-compressed,application/x-7z-compressed,application/x-rar-compressed"
        onChange={handleFileChange}
        className="mb-4"
      />

      {preview ? (
        <div className="mb-4">
          {isVideo(file.type) ? (
            <video src={preview} controls className="rounded-xl mx-auto w-64" />
          ) : (
            <img src={preview} alt="Preview" className="rounded-xl mx-auto w-64" />
          )}
        </div>
      ) : file ? (
        <div className="mb-4 text-sm">
          <p>
            Selected file: <strong>{file.name}</strong> ({file.type || "unknown type"})
          </p>
          {(isPdf(file.type) || isDoc(file.type) || isZip(file.type)) && (
            <p className="text-gray-600">Preview is shown after upload for PDFs. Archives and docs will show a download link after upload.</p>
          )}
        </div>
      ) : null}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`px-4 py-2 rounded-lg text-white ${
          uploading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {uploadedUrl && (
        <div className="mt-6">
          <p className="text-green-600 font-medium">✅ Uploaded Successfully!</p>
          {isImage(file.type) ? (
            <img src={uploadedUrl} alt="Uploaded" className="rounded-xl mx-auto w-64 mt-2" />
          ) : isVideo(file.type) ? (
            <video src={uploadedUrl} controls className="rounded-xl mx-auto w-64 mt-2" />
          ) : isPdf(file.type) ? (
            <iframe
              src={uploadedUrl}
              title="PDF Preview"
              className="rounded-xl mx-auto w-64 h-40 mt-2"
            />
          ) : isZip(file.type) ? (
            <Link
              href={uploadedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              Download Archive →
            </Link>
          ) : (
            <Link
              href={uploadedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              Open File →
            </Link>
          )}
          <p className="text-sm mt-2 text-gray-500">{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
};

export default CloudinaryUpload;
