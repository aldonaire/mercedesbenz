import interior01 from "../assets/interior/e450-interior-01.jpg";
import interior02 from "../assets/interior/e450-interior-02.webp";
import interior03 from "../assets/interior/e450-interior-03.webp";

function Interior({ id }) {
  const materials = [
    {
      image: interior01,
      name: "Nappa Leather",
      detail: "Espresso Brown",
    },
    {
      image: interior02,
      name: "Open-Pore Wood Trim",
      detail: "Natural Grain Ash",
    },
    {
      image: interior03,
      name: "Ambient Lighting",
      detail: "64-Color Accent",
    },
  ];

  return (
    <section id={id} className="interior">
      <h2 className="interior-heading">Interior</h2>

      <div className="interior-scroll">
        {materials.map((material) => (
          <div className="interior-item" key={material.name}>
            <div className="interior-item-media">
              <img src={material.image} alt={`${material.name} — ${material.detail}`} />
            </div>
            <p className="interior-item-name">{material.name}</p>
            <p className="interior-item-detail">{material.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interior;