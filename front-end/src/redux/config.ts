export const serverConfig = {
  host: 'localhost',
  port: 3000,
  protocol: 'http',
  prefix: '',
}

export const SERVER_URI = `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}${serverConfig.prefix}`
