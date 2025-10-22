import React from "react";

export default function GalleryGrid({ images, targetHeight = 200 }) {
  // Function to create justified rows
  const createJustifiedRows = (images) => {
    let rows = [];
    let row = [];
    let rowWidth = 0;

    images.forEach((img) => {
      const randomWidth = Math.random() * 0.5 + 0.75; // placeholder aspect ratio
      row.push({ ...img, aspect: randomWidth });
      rowWidth += randomWidth;

      if (rowWidth >= 2.5) {
        const totalAspect = row.reduce((sum, it) => sum + it.aspect, 0);
        const scaledRow = row.map((it) => ({ ...it, widthPercent: (it.aspect / totalAspect) * 100 }));
        rows.push(scaledRow);
        row = [];
        rowWidth = 0;
      }
    });

    if (row.length > 0) {
      const totalAspect = row.reduce((sum, it) => sum + it.aspect, 0);
      const scaledRow = row.map((it) => ({ ...it, widthPercent: (it.aspect / totalAspect) * 100 }));
      rows.push(scaledRow);
    }

    return rows;
  };

  const rows = createJustifiedRows(images);

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex mb-2">
          {row.map((item) => (
            <div
              key={item.id}
              className="px-1"
              style={{ flex: `0 0 ${item.widthPercent}%`, height: `${targetHeight}px` }}
            >
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-white text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
