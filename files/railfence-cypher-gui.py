from tkinter import*
import random


class RailfenceCypherFrame(Frame):
    '''frame for Railfence Cypher encrypt/decode'''

    def __init__(self,master):
        '''RailfenceCypherFrame(master,name) -> RailfenceCypherFrame
        creates a new Cypher frame'''
        # set up Frame object
        Frame.__init__(self,master)
        self.grid()
        # label for player's name
        Label(self,text="Railfence Cypher Encypt/Decrypt",font=('Arial',18)).grid(columnspan=3,sticky=W)
        # set up score and rerolls
        self.scoreLabel = Label(self,text='Attempt #1, Score: 0',font=('Arial',18))
        self.scoreLabel.grid(row=0,column=2,columnspan=3)
        self.hsLabel = Label(self,text='High Score: 0',font=('Arial',18))    # hsLabel = high score Label
        self.hsLabel.grid(row=0,column=5,columnspan=3,sticky=E)
        # initialize game data
        self.score = 0
        self.highScore = 0
        self.scoresList = []    # keeps track of score gotten per attempt (out of 3)
        self.roundTurn = 0
        self.attempts = 0
        self.ignoreScore = False    # ignores score to add to scoresList if was from a fouled attempt
        # set up dice
        self.dice = []
        for n in range(8):
            self.dice.append(GUIDie(self,[1,2,3,4,5,6],['red']+['black']*5))
            self.dice[n].grid(row=1,column=n)
        # set up buttons
        self.rollButton = Button(self,text='Roll',command=self.roll)
        self.rollButton.grid(row=2,columnspan=1)
        self.stopButton = Button(self,text='Stop',state=DISABLED,command=self.stop)
        self.stopButton.grid(row=3,columnspan=1)

    def roll(self):
        '''DecathShotPutFrame.roll()
        handler method for the roll button click'''
        # roll one die
        self.dice[self.roundTurn].roll()
        
        # checks if die top is 1, and then does the fouled state of the game
        if self.dice[self.roundTurn].get_top() == 1:
            self.scoreLabel['text'] = 'Fouled Attempt'
            self.rollButton['state'] = DISABLED
            self.stopButton['text'] = 'FOUL'
            self.stopButton['state']= ACTIVE
            self.ignoreScore = True
            return

        # if this was the first roll of the attempt, turn on the stop button
        if self.stopButton['state'] == DISABLED:
            self.stopButton['state'] = ACTIVE

        self.score += self.dice[self.roundTurn].get_top()
        self.scoreLabel['text'] = 'Attempt #'+str(self.attempts+1)+', Score: '+str(self.score)
        self.roundTurn += 1  # go to next turn's die roll
        if self.roundTurn < 8:  # move buttons to next pair of dice
            self.rollButton.grid(row=2,column=self.roundTurn,columnspan=1)
            self.stopButton.grid(row=3,column=self.roundTurn,columnspan=1)
            self.rollButton['state'] = ACTIVE
        else:  # attempt round over
            self.stop()


    def stop(self):
        '''DecathShotPutFrame.keep()
        handler method for the stop button click'''
        if self.attempts < 2:
            if self.ignoreScore:
               self.ignoreScore = False
            else:
               self.scoresList.append(self.score)

            self.score = 0

            self.attempts += 1
            self.roundTurn = 0

            # set up dice again
            self.dice = []
            for n in range(8):
               self.dice.append(GUIDie(self,[1,2,3,4,5,6],['red']+['black']*5))
               self.dice[n].grid(row=1,column=n)

            # set up for next attempt
            if len(self.scoresList) > 0:
               self.hsLabel['text'] = 'High Score: '+str(max(self.scoresList))
            self.scoreLabel['text'] = 'Attempt #'+str(self.attempts+1)+', Score: 0'
            self.rollButton['state'] = ACTIVE
            self.stopButton['text'] = 'Stop'
            self.stopButton['state']= DISABLED
            self.rollButton.grid(column=0)
            self.stopButton.grid(column=0)
        else:
            if self.dice[self.roundTurn].get_top() != 1:
               self.scoresList.append(self.score)
            self.hsLabel['text'] = 'High Score: '+str(max(self.scoresList))
            self.stopButton.grid_remove()
            self.rollButton.grid_remove()
            self.scoreLabel['text'] = 'Game over'
            

# play the game
name = input("Enter your name: ")
root = Tk()
root.title('Shot Put')
game = DecathShotPutFrame(root,name)
game.mainloop()