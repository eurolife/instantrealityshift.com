export default function LiteYoutubeEmbed({ id, title, wrapperClass = '' }) {
  return (
    <div className={wrapperClass}>
      <iframe
        class={wrapperClass}
        width="100%"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&showinfo=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
