function status(request, response) {
  response.status(200).json({ testando: "Test" });
}

export default status;
