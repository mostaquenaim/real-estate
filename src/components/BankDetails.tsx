"use client";
import { useState } from "react";
import { FaUniversity, FaRegCopy, FaCheckCircle } from "react-icons/fa";

export const bankInfo = [
  { label: "Bank Name", value: "NRB Bank" },
  { label: "Account Name", value: "Banglar Choya Model City Ltd." },
  { label: "Account Number", value: "1922210011805" },
  { label: "Branch", value: "Gulshan Branch" },
];

export default function BankDetails() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <FaUniversity className="text-green-600 text-3xl" />
        <h2 className="text-xl font-bold">Bank Details</h2>
      </div>

      <div className="space-y-4">
        {bankInfo.map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
            <button
              onClick={() => copyToClipboard(item.value, item.label)}
              className="text-sm flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              {copiedField === item.label ? (
                <>
                  <FaCheckCircle /> Copied
                </>
              ) : (
                <>
                  <FaRegCopy /> Copy
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
