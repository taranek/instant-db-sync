type EntityId = string

interface Window {
  _pool: Record<EntityId, unknown>
}
