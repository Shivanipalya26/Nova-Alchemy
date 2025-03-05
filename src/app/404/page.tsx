"use client";
import Link from "next/link";
import styles from "./404.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className="flex flex-col items-center justify-center h-full text-white text-center p-1 relative">
        <div className="bg-white rounded-3xl shadow-lg p-2  max-w-xs">
          <video
            src="/videos/404.mp4"
            width={400}
            height={400}
            className="mx-auto"
            muted
            autoPlay
            loop
          />
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-xs text-gray-400 tracking-widest">
            THE PAGE YOU ARE LOOKING FOR COULD NOT BE FOUND.
          </p>
          <Link
            href="/"
            className="text-xl hover:text-gray-300 transition-colors"
          >
            Back to homepage
          </Link>
        </div>

        <div className="mt-8 bg-gray-600 px-4 py-2 rounded-full">
          Nova.Alchemy ©2025
        </div>
      </div>
    </div>
  );
}
