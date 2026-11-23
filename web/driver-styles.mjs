// Shared by the application and the standalone HTML report.
export const driverStyles = `
.global-tree,.dt-report{--dt-line:#dce3de;--dt-muted:#5e6e65;--dt-dark:#183d32;--dt-up:#24664d;--dt-down:#a34032;--dt-neutral:#52645b;font-variant-numeric:tabular-nums}
.global-tree{max-width:none;margin:24px 0;padding:0;border:1px solid var(--dt-line);border-radius:18px;background:#f3f6f3;overflow:hidden}
.dt-tree-heading{display:flex;justify-content:space-between;gap:16px;padding:18px 24px;border-bottom:1px solid var(--dt-line);font-size:11px;color:var(--dt-muted)}
.dt-tree-heading>span:first-child{font-weight:700;color:var(--dt-dark);letter-spacing:.3px}
.dt-tree-canvas{padding:28px 24px 20px}
.dt-node{background:#fff;border:1px solid #d4ded7;border-radius:12px;padding:17px 16px;text-align:left;min-width:0;position:relative;box-shadow:0 2px 4px #183d3204}
.dt-node-heading{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}
.dt-node-heading>span:first-child{font-size:11px;font-weight:600;line-height:1.4;color:#4b5e52}
.dt-change{display:inline-block;font-size:10px;font-weight:700;line-height:1.5;padding:3px 7px;border-radius:5px;white-space:normal;overflow-wrap:anywhere}
.dt-up{color:var(--dt-up);background:#eaf3ed}.dt-down{color:var(--dt-down);background:#faece7}.dt-neutral{color:var(--dt-neutral);background:#f0f3f1}
.dt-text-up{color:var(--dt-up)}.dt-text-down{color:var(--dt-down)}.dt-text-neutral{color:var(--dt-neutral)}
.dt-node>strong{display:block;font-size:clamp(18px,1.7vw,26px);font-weight:650;line-height:1.25;letter-spacing:-.7px;margin:13px 0 7px;overflow-wrap:anywhere}
.dt-node>small{display:block;font-size:10px;line-height:1.7;color:var(--dt-muted);overflow-wrap:anywhere}
.dt-node>.dt-unit{font-size:9px;color:#69786e;margin-top:4px}
.dt-node.dt-root{max-width:390px;margin:auto;background:var(--dt-dark);border-color:var(--dt-dark);color:white;padding:22px 24px;box-shadow:0 8px 20px #183d3212}
.dt-root .dt-node-heading>span:first-child,.dt-root>small{color:#d6e7dd}.dt-root>.dt-unit{color:#bcd1c4}
.dt-root .dt-change{background:#ffffff18;color:#fff;border:1px solid #ffffff25}
.dt-root>strong{font-size:34px;font-weight:600;letter-spacing:-1px}
.dt-level{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;gap:22px}
.dt-main-level{position:relative;padding-top:16px}
.dt-main-level:before{content:'';position:absolute;top:0;left:25%;right:25%;height:1px;background:#bacbc0}
.dt-branch{min-width:0;position:relative}.dt-branch:before{content:'';position:absolute;top:-16px;left:50%;height:16px;border-left:1px solid #bacbc0}
.tree-equation{position:relative;text-align:center;font-size:10px;color:var(--dt-muted);margin:0;padding:12px 0;line-height:1.5}
.tree-equation:before{content:'';position:absolute;top:0;bottom:0;left:50%;border-left:1px solid #bacbc0}
.tree-equation>span{position:relative;background:#f3f6f3;padding:3px 8px;display:inline-block;border:1px solid #dce3de;border-radius:5px}
.dt-leaves{border:0;padding-top:16px;position:relative;gap:14px}
.dt-leaves:before{content:'';position:absolute;top:0;left:25%;right:25%;border-top:1px solid #bacbc0}
.dt-leaves>article:before,.dt-leaves>div:before{content:'';position:absolute;top:-16px;left:50%;height:16px;border-left:1px solid #bacbc0}
.dt-leaves>div{position:relative;min-width:0}
.dt-pvm{display:grid;grid-template-columns:1fr;gap:12px;padding-left:14px;border-left:1px solid #bacbc0}
.dt-pvm>.dt-node:before{content:'';position:absolute;top:50%;left:-15px;width:14px;border-top:1px solid #bacbc0}
.dt-tree-legend{padding:14px 24px;margin:0;border-top:1px solid var(--dt-line);font-size:10px;line-height:1.7;color:var(--dt-muted);background:#ffffff70}
.dt-hero-tree{padding:18px;background:#eef3ee;border-color:#dce3de}.dt-hero-tree>.eyebrow{font-size:9px;letter-spacing:1.3px;justify-content:center}
.tree-compact{margin-bottom:0}.tree-compact .dt-tree-heading{padding:12px;font-size:9px}.tree-compact .dt-tree-heading>span:last-child{display:none}
.tree-compact .dt-tree-canvas{padding:20px 12px 16px}.tree-compact .dt-level{gap:12px}.tree-compact .dt-node{padding:12px 10px}
.tree-compact .dt-node>strong{font-size:17px;margin:9px 0 5px}.tree-compact .dt-node.dt-root{max-width:280px;padding:16px}.tree-compact .dt-root>strong{font-size:28px}
.tree-compact .dt-node-heading>span:first-child{font-size:10px}.tree-compact .dt-change{font-size:9px;padding:2px 5px}.tree-compact .dt-unit{display:none}
.tree-compact .tree-equation{font-size:9px;padding:10px 0}.tree-compact .dt-tree-legend{font-size:9px;padding:12px}
.dt-report-heading{align-items:center;margin-bottom:16px}.dt-report-heading h2{font-size:30px;line-height:1.2;margin:10px 0 12px;letter-spacing:-1px}.dt-report-heading p{margin:0;font-size:13px;line-height:1.7;color:var(--dt-muted);max-width:700px;overflow-wrap:anywhere}
.dt-report-heading .eyebrow{color:var(--dt-muted)}.dt-report .status-pill{white-space:normal;text-align:center;flex-shrink:0;border:1px solid #c9ded0;background:#e9f3ec;color:#28523d}
.dt-report .dt-status-partial,.dt-report .dt-status-context_required{background:#fff3dd;color:#74521a;border-color:#ead8b3}
.dt-report-context{display:flex;flex-wrap:wrap;gap:10px 24px;padding:14px 0 22px;font-size:11px;color:var(--dt-muted);border-bottom:1px solid var(--dt-line);overflow-wrap:anywhere}
.dt-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:24px 0}
.dt-summary>span{background:#fff;border:1px solid var(--dt-line);border-radius:12px;padding:20px;font-size:11px;color:var(--dt-muted)}
.dt-summary b{display:block;font-size:clamp(20px,2.2vw,30px);font-weight:600;letter-spacing:-.8px;line-height:1.3;margin:14px 0 8px;overflow-wrap:anywhere}
.dt-summary small{display:block;font-size:10px;line-height:1.5}.dt-summary>span:nth-child(2){border-top:3px solid var(--dt-dark);padding-top:18px}
.dt-contributions{padding:26px;border:1px solid var(--dt-line);border-radius:16px;background:white;margin:28px 0}
.dt-block-heading{display:flex;align-items:center;justify-content:space-between;gap:20px}.dt-block-heading .eyebrow{font-size:10px;color:var(--dt-muted)}
.dt-report .dt-block-heading h3{margin:10px 0;font-size:21px;line-height:1.3;letter-spacing:-.5px}
.dt-reconciliation{font-size:12px;font-weight:600;white-space:nowrap;background:#f0f4f1;border:1px solid #dce3de;border-radius:6px;padding:8px 12px}
.dt-contribution-axis{display:flex;justify-content:space-between;margin:24px 0 12px;font-size:10px;color:var(--dt-muted)}
.contribution-list{display:grid;gap:18px;margin:16px 0 22px}
.contribution-list>.dt-contribution-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px;font-size:12px;line-height:1.5}
.contribution-track{grid-column:1/-1;position:relative;height:10px;background:linear-gradient(to right,#f8eeea 0%,#f8eeea 50%,#edf4ef 50%);border-radius:3px;overflow:visible}
.contribution-track:after{content:'';position:absolute;left:50%;top:-3px;bottom:-3px;width:1px;background:#a0afa5}
.contribution-track i{display:block;position:absolute;top:0;height:100%;border-radius:2px}
.contribution-track .dt-bar-down{right:50%;background:#b8624a}.contribution-track .dt-bar-up{left:50%;background:#4e8065}.contribution-track .dt-bar-neutral{left:50%;background:#a5b0a9}
.dt-contribution-note{padding-top:16px;border-top:1px solid var(--dt-line);line-height:1.8}
.dt-report details{border:1px solid var(--dt-line);border-radius:12px;padding:18px 20px;background:white}
.dt-report summary{font-size:13px;font-weight:600;line-height:1.6;cursor:pointer}.dt-report summary>span{font-weight:400;font-size:11px;color:var(--dt-muted);margin-left:12px}
.dt-report th,.dt-report td{font-size:12px;font-variant-numeric:tabular-nums}.dt-report td{text-align:right;white-space:nowrap}.dt-report thead th:not(:first-child){text-align:right}.dt-report th[scope=row]{font-weight:500}
.dt-report .table-wrap{margin-top:10px}.dt-report .notice{margin-top:24px}.dt-report .help{line-height:1.8}
@media(max-width:1000px){.dt-summary{grid-template-columns:repeat(2,minmax(0,1fr))}.dt-block-heading{align-items:start;flex-direction:column;gap:6px}.tree-compact .dt-node>strong{font-size:19px}}
@media(max-width:700px){.dt-tree-heading{padding:14px 16px;flex-direction:column;gap:6px}.dt-tree-canvas{padding:22px 12px 16px}.dt-level{gap:12px}.dt-node{padding:14px 10px}.dt-node>strong,.tree-compact .dt-node>strong{font-size:18px}.dt-node>small{font-size:10px}.dt-node-heading>span:first-child{font-size:11px}.dt-root>strong{font-size:30px}.dt-node.dt-root{max-width:300px;padding:18px}.dt-leaves{grid-template-columns:1fr;border-top:0;border-left:1px solid #bacbc0;margin-left:8px;padding:0 0 0 12px;gap:12px}.dt-leaves:before{display:none}.dt-leaves>article:before,.dt-leaves>div:before{top:24px;left:-13px;width:12px;height:0;border-left:0;border-top:1px solid #bacbc0}.dt-pvm{padding-left:12px}.tree-equation{font-size:9px;padding:12px 0}.tree-equation>span{padding:3px 5px}.dt-tree-legend{padding:12px 16px}.tree-compact .dt-node{padding:12px 9px}.tree-compact .dt-tree-canvas{padding:20px 10px}.dt-hero-tree{padding:16px 10px}.dt-report-heading{flex-direction:column;align-items:start;gap:14px}.dt-report-heading h2{font-size:25px}.dt-report-context{gap:10px 16px;line-height:1.6}.dt-summary{gap:10px}.dt-summary>span{padding:16px}.dt-summary>span:nth-child(2){padding-top:14px}.dt-summary b{font-size:22px}.dt-contributions{padding:20px 16px}.dt-report .dt-block-heading h3{font-size:19px}.dt-report details{padding:16px}.dt-report summary>span{display:block;margin:6px 0 0}.dt-report .status-pill{flex-shrink:1}}
@media(prefers-reduced-motion:reduce){.dt-report *{scroll-behavior:auto!important}}
@media print{body{background:#fff!important}.global-tree,.dt-contributions{break-inside:avoid}.dt-report{color:#19201e}.dt-report details{break-inside:avoid}.dt-report .actions{display:none}.dt-node,.dt-summary>span{box-shadow:none}.dt-change,.dt-root,.contribution-track{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
`;
