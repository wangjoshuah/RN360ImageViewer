//
//  JHWPanoramaView.m
//  RN360ImageViewer
//
//  Created by Josh Wang on 10/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/UIView+React.h>
#import "JHWPanoramaView.h"

@implementation JHWPanoramaView
{
  // Weak reference back to the bridge, for image loading
  __weak RCTBridge *_bridge;
}

RCT_NOT_IMPLEMENTED(- (instancetype)initWithCoder:(NSCoder *)aDecoder)

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  return self;
}

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  _bridge = bridge;
  self = [super init];
  return self;
}

- (void)layoutSubviews {
  NSLog(@"[JHW][PanoramaView] layoutSubviews");
  CTPanoramaView *panoramaView = [[CTPanoramaView alloc]
                                  initWithFrame:self.bounds
                                  image:[UIImage imageNamed:@"R0010020"]];
  panoramaView.controlMethod = CTPanoramaControlMethodMotion;
  [self addSubview:panoramaView];
}

RCT_NOT_IMPLEMENTED(- (instancetype)init)


@end
