//
//  JHWPanoramaViewManager.m
//  RN360ImageViewer
//
//  Created by Josh Wang on 10/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "JHWPanoramaViewManager.h"
#import "JHWPanoramaView.h"
#import <MapKit/MapKit.h>

//#import <CTPanoramaView/CTPanoramaView.h>

@implementation JHWPanoramaViewManager

// Export the module to React Native
RCT_EXPORT_MODULE(PanoramaView);

- (UIView *)view
{
  NSLog(@"[JHW] view called");
  return [[JHWPanoramaView alloc] initWithBridge:self.bridge];
}


@end
