import { OSCreateNotificationBadgeType, OSCreateNotificationDelayOption, OSNotificationActionType } from 'react-native-onesignal/src/defines';

export class OSActionButton {
   /** The custom identifier for this button/action */
   public id : String;

   /** The title for the button */
   public title : String;

   /** Android only - the URL/filename for the icon */
   public icon? : String;

   /** constructor function */
   public constructor(id : String, title : String, icon?: String) {
      this.id = id;
      this.title = title;
   }
   
   public jsonRepresentation() : any {
      return {
         'id' : this.id,
         'title' : this.title,
         'icon' : this.icon
      };
   }
}

export class OSNotificationBase {

   /** The notification's content (body) */
   public content? : String;

   /** The title/heading for the notification */
   public heading? : String;

   /** The subtitle for the notification (iOS 10+ only) */   
   public subtitle? : String;

   /** Tells the app to launch in the background (iOS only) */
   public contentAvailable? : Boolean;

   /** 
    * Tells the app to launch the Notification Service extension,
    * which can mutate your notification (ie. download attachments)
    */
   public mutableContent? : Boolean;

   /** Additional data you wish to send with the notification */
   public additionalData? : Object;

   /** The URL to open when the user taps the notification */
   public url? : String;

   /**
    * Media (images, videos, etc.) for iOS. Maps a custom
    * ID to a resource URL in the format {'id' : 'https://.....'}
    */
   public iosAttachments? : Map<String, String>;

   /** An image to use as the big picture (android only) */
   public bigPicture? : String;

   /** A list of buttons to attach to the notification */
   public buttons? : Array<OSActionButton>;

   /** 
    * The category identifier for iOS (controls various aspects
    * of the notification, for example, whether to launch a
    * Notification Content Extension) (iOS only)
    */
   public iosCategory? : String;

   /** 
    * A small icon (Android only) 
    * Can be a drawable resource name or a URL
   */
   public androidSmallIcon? : String;

   /** 
    * A large icon (Android only) 
    * Can be a drawable resource name or a URL
   */
   public androidLargeIcon? : String;

   /** The Android Oreo Notification Category to send the notification under */
   public androidChannelId? : String;

   /** 
    * If multiple notifications have the same collapse ID, only the most
    * recent notification will be shown. (For iOS 12+ thread ID is preferred)
    */
   public collapseId? : String;

   /** Allows you to send a notification at a specific date */
   public sendAfter? : Date;

   /** Allows you to control how the notification is delayed */
   public delayOption? : OSCreateNotificationDelayOption;

   /** 
    * Used in conjunction with delayedOption == timezone, lets you specify what  
    * time of day each user should receive the notification, ie. "9:00 AM"
    */
   public deliveryTimeOfDay? : String;

   /** The Thread-ID for this notification (iOS 12+) */
   public iosThreadId? : String;

   constructor(nativeJson : any) {
      if (!nativeJson) return;
      if (nativeJson.body) this.content = nativeJson.body;
      if (nativeJson.title) this.heading = nativeJson.title;
      if (nativeJson.subtitle) this.subtitle = nativeJson.subtitle;
      if (nativeJson.launchURL) this.url = nativeJson.launchURL;
      if (nativeJson.additionalData) this.additionalData = nativeJson.additionalData;
      if (nativeJson.attachments) this.iosAttachments = nativeJson.attachments;
      if (nativeJson.actionButtons) this.buttons = nativeJson.actionButtons;
      if (nativeJson.category) this.iosCategory = nativeJson.category;
      if (nativeJson.threadId) this.iosThreadId = nativeJson.threadId;
   }
}
