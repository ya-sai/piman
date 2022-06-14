import { Route } from 'vue-router'

type Position = { x: number; y: number }
type PositionResult =
  | Position
  | { selector: string; offset?: Position; behavior?: ScrollBehavior }
  | void

export default function(
  to: Route,
  from: Route,
  savedPosition: Position
): PositionResult | Promise<PositionResult> | undefined | null {
  return { x: 0, y: 0 }
}
