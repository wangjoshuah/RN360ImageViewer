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
  NSLog(@"[JHW][PanoramaView] initWithFrame");
  self = [super initWithFrame:frame];
  if (self) {
    NSLog(@"[JHW][PanoramaView] commonInit");
    self.backgroundColor = [UIColor blueColor];
    CTPanoramaView *panoramaView = [[CTPanoramaView alloc]
                                    initWithFrame:frame
                                    image:[UIImage imageNamed:@"R0010020"]];
    [self addSubview:panoramaView];
  }
  return self;
}

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  NSLog(@"[JHW][PanoramaView] initWithBridge");
  _bridge = bridge;
  self = [super init];
  if (self) {
    [self commonInit];
  }
  return self;
}

- (void)commonInit
{
  NSLog(@"[JHW][PanoramaView] commonInit");
  self.backgroundColor = [UIColor blueColor];
  CTPanoramaView *panoramaView = [[CTPanoramaView alloc]
                                  initWithFrame:self.bounds
                                  image:[UIImage imageNamed:@"R0010020"]];
  [self addSubview:panoramaView];
}

RCT_NOT_IMPLEMENTED(- (instancetype)init)


@end
