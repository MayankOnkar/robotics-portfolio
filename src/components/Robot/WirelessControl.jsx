
function WirelessControl({ data }) {
  return (
    <section className="wireless-section">
      <div className="robot-section-heading">
        <p className="eyebrow">COMMAND & CONTROL</p>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="controller-feature">
        <div className="controller-image-wrap">
          <img
            src={data.controller.image}
            alt={data.controller.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="controller-description">
          <h3>{data.controller.title}</h3>
          <p>{data.controller.description}</p>
        </div>
      </div>

      <div className="control-flow">
        {data.flow.map((step, index) => (
          <div className="control-flow-item" key={step}>
            <div className="control-flow-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{step}</h3>
          </div>
        ))}
      </div>

      <div className="control-details-grid">
        <article className="control-detail-card">
          <h3>{data.communication.title}</h3>
          <p>{data.communication.description}</p>
        </article>

        <article className="control-detail-card">
          <h3>{data.robotController.title}</h3>
          <p>{data.robotController.description}</p>
        </article>

        <article className="control-detail-card">
          <h3>{data.actuators.title}</h3>
          <p>{data.actuators.description}</p>
        </article>
      </div>
    </section>
  );
}

export default WirelessControl;
