/**
 * Status of the notification
 */
export enum NotificationStatus {
    /**
     * Notification is arriving
     */
    Arriving,
    
    /**
     * Natification is shown
     */
    Show,

    /**
     * Notificaion is leaving and will be removed soon
     */
    Leaving
}