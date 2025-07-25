// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * When enabled, the action will use the RoadwayAI batch API.
   */
  enable_batching?: boolean
  /**
   * The identifier of the user
   */
  user_id?: string
  /**
   * Anonymous ID of the user
   */
  anonymous_id?: string
  /**
   * ID of the group
   */
  group_id?: string
  /**
   * Name of the group where user belongs to
   */
  group_name?: string
  /**
   * The time the event occurred in UTC
   */
  timestamp: string
  /**
   * Group traits
   */
  traits?: {
    [k: string]: unknown
  }
  /**
   * Event context
   */
  context?: {
    [k: string]: unknown
  }
}
