"use client";

import React from "react";
import {
  FaFilePdf,
  FaDownload,
  FaEye,
  FaFolder,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export interface Document {
  id: string;
  name: string;
  category: string;
  fileType: "pdf" | "image" | "doc";
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  //   previewUrl?: string;
  description?: string;
  verified?: boolean;
}

export interface DocumentCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface LegalDocumentProps {
  filteredDocs: Document[];
  handlePreview: (doc: Document) => void;
  handleDownload: (doc: Document) => void;
  setPreviewDoc: React.Dispatch<React.SetStateAction<Document | null>>;
  previewDoc: Document | null;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: DocumentCategory[];
}

const LegalDocument: React.FC<LegalDocumentProps> = ({
  handlePreview,
  handleDownload,
  filteredDocs,
  setPreviewDoc,
  previewDoc,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-3xl" />;
      case "image":
        return <FaEye className="text-blue-500 text-3xl" />;
      default:
        return <FaFolder className="text-gray-500 text-3xl" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 mb-10 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaShieldAlt className="text-4xl text-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Official Documents
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Access and download our verified legal documents, certificates, and
            company information. All documents are official and up-to-date.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === "all"
                ? "bg-yellow-500 text-gray-900 shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            <FaFolder />
            All Documents
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-yellow-500 text-gray-900 shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              {cat.icon}
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                    {getFileIcon(doc.fileType)}
                  </div>
                  {doc.verified && (
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      <FaCheckCircle />
                      Verified
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {doc.name}
                </h3>
                {doc.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="font-medium">{doc.fileSize}</span>
                  <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm flex-1"
                  >
                    <FaEye />
                    Preview
                  </a>
                  <a
                    href={doc.downloadUrl}
                    download={true}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors font-medium text-sm flex-1"
                  >
                    <FaDownload></FaDownload>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDocument;
