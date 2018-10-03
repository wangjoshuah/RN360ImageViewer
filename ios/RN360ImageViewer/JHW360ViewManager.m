//
//  JHW360ViewManager.m
//  RN360ImageViewer
//
//  Created by Josh Wang on 10/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "JHW360ViewManager.h"
#import <MapKit/MapKit.h>
//#import <CTPanoramaView/CTPanoramaView.h>

@implementation JHW360ViewManager

//- (UIView *)viewWithProps:(__unused NSDictionary *)props
//{
//  NSLog(@"[JHW] view with props called");
//  NSString *imagePath = ((NSString *)props[@"image"]).stringValue;
//  self.presetCamera = ((NSNumber *)props[@"type"]).integerValue;
//  CTPanoramaView panoramaView = [CTPanoramaView init];
//  return [self view];
//}

- (UIView *)view
{
  NSLog(@"[JHW] view called");
  return [[MKMapView alloc] init];
}
// Export the module to React Native
RCT_EXPORT_MODULE();

@end
