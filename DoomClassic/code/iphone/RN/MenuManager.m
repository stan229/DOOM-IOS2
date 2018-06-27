//
//  MenuManager.m
//  Doom
//
//  Created by Stan Bershadskiy on 6/26/18.
//

#import "MenuManager.h"
#include "doomiphone.h"


@implementation MenuManager
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(startGame: (nonnull NSNumber *)episode map:(nonnull NSNumber *)map) {
    mapStart_t localStartmap;
    
    localStartmap.map = [map intValue];
    localStartmap.episode = [episode intValue];
    localStartmap.dataset = 0;
    localStartmap.skill = 3;
    
    dispatch_async( dispatch_get_main_queue(), ^{
        iphonePauseMusic();
//        iphoneMainMenu();
        StartSinglePlayerGame(localStartmap);
        ShowGLView();
        
    });
    
}

@end
