export const ROUTES = {
    HOME:( ) => `/`,
    CREATE_ROOM:( ) => `/room/create`,
    JOIN_ROOM:( ) => `/room/join`,
    ROOM_ID:(roomId: string) => `/room/${roomId}`,
}