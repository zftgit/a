import hilog from "@ohos:hilog";
class Logger {
    private domain: number;
    private prefix: string;
    private format: string = '%{public}s, %{public}s';
    /**
     * Constructor.
     *
     * @param Prefix Identifies the log tag.
     * @param domain Domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFFF.
     */
    constructor(prefix: string) {
        this.prefix = prefix;
        this.domain = 0xFF00;
    }
    debug(...args: string[]): void {
        hilog.debug(this.domain, this.prefix, this.format, args);
    }
    info(...args: string[]): void {
        hilog.info(this.domain, this.prefix, this.format, args);
    }
    warn(...args: string[]): void {
        hilog.warn(this.domain, this.prefix, this.format, args);
    }
    error(...args: string[]): void {
        hilog.error(this.domain, this.prefix, this.format, args);
    }
}
export default new Logger('CardInfoRefresh');
