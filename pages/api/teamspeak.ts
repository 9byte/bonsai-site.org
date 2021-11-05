import { NextApiRequest, NextApiResponse } from "next";
import { TeamSpeak, QueryProtocol } from "ts3-nodejs-library";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ts = await TeamSpeak.connect({
    host: "voice.bonsai-site.org",
    protocol: QueryProtocol.RAW,
    queryport: 10011,
    serverport: 9987,
    nickname: "bonsai-site.org Bot",
  });

  const clients = await ts.clientList({clientType: 0})

  res.status(200).json({ clients: clients });
}
