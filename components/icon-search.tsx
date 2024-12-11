"use client";

import { useState } from "react";
import { icons } from "./icons";
import { Search } from "lucide-react";

export function IconSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (icon: (typeof icons)[number]) => {
    try {
      await navigator.clipboard.writeText(icon.code);
      setCopiedIcon(icon.name);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {/* Search icon */}
          <Search size={16} className="fg-subtle" />
        </div>
        <input
          type="search"
          className="block w-full pl-9 pr-3 py-2 border border-fd-border rounded-md bg-fd-secondary focus:outline-none focus:ring-1 focus:border-inverted placeholder:fg-subtle fg-base text-sm"
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 fg-base">
          {filteredIcons.map((icon) => (
            <button
              key={icon.name}
              onClick={() => handleCopy(icon)}
              className="group relative flex flex-col items-center justify-center px-2 py-5 rounded-md bg-fd-secondary border border-fd-border hover:bg-fd-muted/70 transition-colors"
            >
              <div
                className={`flex flex-col items-center gap-1 ${
                  copiedIcon === icon.name ? "hidden" : ""
                }`}
              >
                <icon.component />
                <span className="mt-2 text-xs fg-subtle">{icon.name}</span>
              </div>
              {copiedIcon === icon.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-background-primary rounded-md">
                  <span className="text-sm fg-subtle">Copied!</span>
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-500 mb-4"
          >
            <path
              d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-lg font-medium">No icons found</h3>
          <p className="text-sm fg-subtle">
            Try searching with a different term
          </p>
        </div>
      )}
    </div>
  );
}
