//
//  JHWPanoramaView.h
//  RN360ImageViewer
//
//  Created by Josh Wang on 10/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTResizeMode.h>
#import <CTPanoramaView/CTPanoramaView-Swift.h>

NS_ASSUME_NONNULL_BEGIN

@class RCTBridge;

@interface JHWPanoramaView : UIView

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@end

NS_ASSUME_NONNULL_END
