// Deprecated — not used in BoardBrief
export async function runPipeline() { return { organization: {}, questions: [] } }
export function autoDetectColumns() { return {} }
export interface PipelineResult { organization: object; questions: unknown[] }
export interface PipelineProgress { step: string; progress: number; detail?: string }
