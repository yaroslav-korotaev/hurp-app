export function main(cb: () => Promise<void>): void {
  cb().catch(err => {
    // this probably will never been called, as soon as you have error plugin attached,
    // but just in case
    process.exitCode = 1;
    console.error(err);
  });
}
