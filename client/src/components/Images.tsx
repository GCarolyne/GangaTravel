export type Image = {
  src: string;
  alt: string;
};
type Prop = {
  image: Image;
};

export function Images({ image }: Prop) {
  return (
    <div className="flex-1 px-4 sm:px-6 py-4">
      <div className="relative w-full max-w-xs mx-auto aspect-square overflow-hidden rounded-full shadow-md border-4 border-stone-100">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
      </div>
    </div>
  );
}
