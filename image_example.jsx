function Image() {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10";

  return (
    <div>
      <img src={imageUrl} alt="Random image" />
    </div>
  );
}

export default Image;