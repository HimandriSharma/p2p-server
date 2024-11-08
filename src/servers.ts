export type Node = {
  user: string;
  uri: string;
};

const servers: Node[] = [];

export function addNode(node: Node) {
  const isAlreadyExist = servers.find((i) => i.user === node.user);
  if (isAlreadyExist) {
    return;
  }
  console.log(`${node.user} registered at ${node.uri}`);
  servers.push(node);
}

export function getNodeByUser(user: string) {
  return servers.find((server) => server.user === user);
}

export function getNodes() {
  return [...servers];
}
