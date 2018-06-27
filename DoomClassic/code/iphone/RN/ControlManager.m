//
//  ControlManager.m
//  Doom
//
//  Created by Stan Bershadskiy on 6/25/18.
//

#import "ControlManager.h"
#include "doomiphone.h"

@implementation ControlManager
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(fire) {
    player_t *player = &players[displayplayer];
    player->cmd.buttons |= BT_ATTACK;
    
    A_ReFire(player);
}

RCT_EXPORT_METHOD(fun) {
    consoleCommand[0] = 'i';
    consoleCommand[1] = 'd';
    consoleCommand[2] = 'k';
    consoleCommand[3] = 'f';
    consoleCommand[4] = 'a';
}
@end
