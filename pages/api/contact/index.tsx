export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: number; error: string; }): void; new(): any; }; }; }) {
    res.status(404).json({ status: 404, error: 'Not found!' })
}
  