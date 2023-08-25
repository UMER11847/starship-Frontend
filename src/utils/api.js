const HOST = import.meta.env.VITE_BACKEND_HOST
const PORT = import.meta.env.VITE_BACKEND_PORT
const BASE = import.meta.env.VITE_BACKEND_BASE_ROUTE

function getBackendURL(path) {
  return `http://${HOST}:${PORT}${BASE}` + (path || "")
}

export { HOST, PORT, BASE, getBackendURL }