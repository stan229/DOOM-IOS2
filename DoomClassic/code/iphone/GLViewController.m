//
//  GLViewController.m
//  Doom
//
//  Created by Stan Bershadskiy on 6/24/18.
//

#import "GLViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import "EmbedViewController.h"

@interface GLViewController () <RCTBridgeDelegate> {
    EmbedViewController *embedViewController;
    RCTBridge *_bridge;
    BOOL isRNRunning;
}

@end

@implementation GLViewController

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    return jsCodeLocation;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (void) StartDisplay {
    [super StartDisplay];
    if(_bridge == nil) {
        _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
    }
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBridge :_bridge
                      moduleName        : @"DoomControls"
                      initialProperties : nil];
    
    isRNRunning = true;
    rootView.opaque = NO;
    rootView.backgroundColor = [UIColor colorWithWhite:0.0 alpha:0.0];
    
    CGRect frame = [rootView frame];
    frame.size.height = 200.0f;
    frame.size.width = 400.0f;
    frame.origin.x = 96.0f;
    frame.origin.y = 50.0f;
    [rootView setFrame:frame];

    [self.view addSubview:rootView];
    [embedViewController setView:rootView];
}
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    if([segue.identifier isEqualToString:@"embed"]) {
        embedViewController = segue.destinationViewController;
    }
}




@end
