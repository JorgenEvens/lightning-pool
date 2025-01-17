export default class PoolOptions {
    public acquireMaxRetries: number;
    public acquireRetryWait: number;
    public acquireTimeoutMillis: number;
    public fifo: boolean;
    public idleTimeoutMillis: number;
    public houseKeepInterval: number;
    public min: number;
    public minIdle: number;
    public max: number;
    public maxQueue: number;
    public resetOnReturn: boolean;
    public validation: boolean;
}

