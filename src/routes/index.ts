export const ROUTES = {
    HOME:( ) => `/`,
    CREATE_ROOM:( ) => `/room/create`,
    JOIN_ROOM:( ) => `/room/join`,
    JOIN_ROOM_ID:(roomId: string) => `/room/join/${roomId}`,
}