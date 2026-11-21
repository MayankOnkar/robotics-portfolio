
function assetPath(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export default assetPath;
