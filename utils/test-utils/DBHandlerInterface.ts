interface DBHandlerI {
    connect: () => Promise<void>,
    disconnect: () => Promise<void>
}

export default DBHandlerI