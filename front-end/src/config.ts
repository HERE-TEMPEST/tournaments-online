export const serverConfig = {
  host: '127.0.0.1',
  port: 3000,
  protocol: 'http',
  prefix: '',
}

export const SERVER_URI = `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}${serverConfig.prefix}`
