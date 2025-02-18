/**
 * O mock do module-federation.ts é utilizado para simular o comportamento do método loadRemoteModule,
 * pois o Jest não consegue executar (Transformar) o código do módulo remoto.
 */
export async function loadRemoteModule(options: any): Promise<any> {
  // Mock do comportamento de loadRemoteModule
  return Promise.resolve({});
}
