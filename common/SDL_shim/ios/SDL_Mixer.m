/*
 
 Copyright (C) 2011 Id Software, Inc.
 
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 
 */
 
 
/*
===============================

iOS implementation of our SDL_Mixer shim for playing MIDI files.

===============================
*/

#include <stddef.h>

#include "SDL_Mixer.h"

#import <AVFoundation/AVFoundation.h>

AVMIDIPlayer *player = nil;

/* Open the mixer with a certain audio format */
int Mix_OpenAudio(int frequency, uint16_t format, int channels,
				  int chunksize) {
	
	
	return 0;
}


/* Close the mixer, halting all playing audio */
void Mix_CloseAudio(void) {
    [player stop];
}


/* Set a function that is called after all mixing is performed.
   This can be used to provide real-time visual display of the audio stream
   or add a custom mixer filter for the stream data.
*/
void Mix_SetPostMix(void (*mix_func)
					(void *udata, uint8_t *stream, int len), void *arg) {

}


/* Fade in music or a channel over "ms" milliseconds, same semantics as the "Play" functions */
int Mix_FadeInMusic(Mix_Music *music, int loops, int ms) {
	
	
    [player play:^(){
        NSLog(@"complete!");
    }];
	
	return 0;
}


/* Pause/Resume the music stream */
void Mix_PauseMusic(void) {
    [player stop];
}


void Mix_ResumeMusic(void) {
    [player play:^(){
        NSLog(@"complete!");
    }];
}


/* Halt a channel, fading it out progressively till it's silent
   The ms parameter indicates the number of milliseconds the fading
   will take.
 */
int Mix_FadeOutMusic(int ms) {

    [player stop];
	return 1;
}


/* Free an audio chunk previously loaded */
void Mix_FreeMusic(Mix_Music *music) {
	free(music);
}


/* Load a wave file or a music (.mod .s3m .it .xm) file */
Mix_Music * Mix_LoadMUS(const char *file) {
    
    if (player) {
        [player release];
    }
    
    NSString *pathstring = [NSString stringWithFormat:@"%s",file];
    // midi music file
    NSURL *url = [NSURL fileURLWithPath:pathstring];
    
    // midi bank file, you can download from http://www.sf2midi.com/
    NSURL *bank = [[NSBundle mainBundle] URLForResource:@"8MBGMSFX" withExtension:@"SF2"];
    
    NSError *error = nil;
    
    player = [[AVMIDIPlayer alloc] initWithContentsOfURL:url soundBankURL:bank error:&error];
    
    if (error) {
        NSLog(@"error = %@", error);
    }
    
    [player prepareToPlay];
    
    Mix_Music * musicStruct = malloc( sizeof(Mix_Music) );
	
	return musicStruct;
}


const char * Mix_GetError(void) {
	return "";
}


/* Set the volume in the range of 0-128 of a specific channel or chunk.
   If the specified channel is -1, set volume for all channels.
   Returns the original volume.
   If the specified volume is -1, just return the current volume.
*/
int Mix_VolumeMusic(int volume) {

	return 0;

}







