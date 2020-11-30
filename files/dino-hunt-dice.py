# Python Class 1967
# Lesson 6 Problem 5
# Author: leum22 (286313)

import random

### Die class that we previously wrote ###

class Die:
    '''Die class'''

    def __init__(self,sides=6):
        '''Die(sides)
        creates a new Die object
        int sides is the number of sides
        (default is 6)
        -or- sides is a list/tuple of sides'''
        # if an integer, create a die with sides
        #  from 1 to sides
        if isinstance(sides,int):
            self.numSides = sides
            self.sides = list(range(1,sides+1))
        else:  # use the list/tuple provided 
            self.numSides = len(sides)
            self.sides = list(sides)
        # roll the die to get a random side on top to start
        self.roll()

    def __str__(self):
        '''str(Die) -> str
        string representation of Die'''
        return 'A '+str(self.numSides)+'-sided die with '+\
               str(self.get_top())+' on top'

    def roll(self):
        '''Die.roll()
        rolls the die'''
        # pick a random side and put it on top
        self.top = self.sides[random.randrange(self.numSides)]

    def get_top(self):
        '''Die.get_top() -> object
        returns top of Die'''
        return self.top

    def set_top(self,value):
        '''Die.set_top(value)
        sets the top of the Die to value
        Does nothing if value is illegal'''
        if value in self.sides:
            self.top = value

### end Die class ###

class DinoDie(Die):
    '''implements one die for Dino Hunt'''

    def __init__(self, color):
        '''DinoDie(color)
        subclass of Die superclass
        uses color to determine a list of 6 elements to be used, configured by game instructions
        inherits rest of __init__ from superclass Die using selectable elements from self.itemList
        '''
        self.color = color    # color of Dino Die
        self.itemList = []    # list of elements a die has decided in the next statement
        
        # select selection list by color

        if self.color == 'Green':
            self.itemList = ['Dinos','Dinos','Dinos','Leaves','Leaves','Feet']
        elif self.color == 'Yellow':
            self.itemList = ['Dinos','Dinos','Leaves','Leaves','Feet','Feet']
        elif self.color == 'Red':
            self.itemList = ['Dinos','Leaves','Leaves','Feet','Feet','Feet']

        Die.__init__(self, self.itemList)    # inherit __init__ from superclass Die


class DinoPlayer:
    '''implements a player of Dino Hunt'''
    
    def __init__(self, name):
        '''DinoPlayer(name)
        self.name is str name of player inputted
        self.points is set to 0'''

        self.name = name
        self.points = 0

    def __str__(self):
        '''str(DinoPlayer)
        return name and corresponding points with format'''

        return (self.name + ' has ' + str(self.points))

    def name(self):
        '''DinoPlayer.name()
        return name as str'''

        return self.name

    def count_color(self, color):
        '''DinoPlayer.count_color(color)
        returns number of color dice in self.diceList'''

        total = 0
        for element in self.diceList:
            if element == color:
                total += 1

        return str(total)

    def take_turn(self):
        '''DinoPlayer.take_turn()
        self DinoPlayer takes a turn'''

        self.diceList = ['Green','Green','Green','Green','Green','Green','Yellow','Yellow','Yellow','Yellow','Red','Red','Red']
        turnEnd = False    # boolean whether the turn has ended (False for not ended, True for ended)
        feetCounter = 0    # for storing how many Feet rolled for Stomp (3 Feet counted)
        dinoCounter = 0    # for storing num of dinos captured

        print(self.name + ", it's your turn!")

        print('\nYou have ' + str(len(self.diceList)) + ' dice remaining.')
        print(self.count_color('Green') + ' green, ' + self.count_color('Yellow') + ' yellow, and ' + self.count_color('Red') + ' red.')
        input('Press enter to select dice and roll.')

        for i in range(3):
            randRoll = DinoDie(self.diceList[random.randrange(len(self.diceList))])    # get a random index for random choosing, then roll the corresponding DinoDie
            print('A ' + randRoll.color + ' Dino die with a ' + randRoll.get_top() + ' on top.')
            if randRoll.get_top() == 'Dinos':    # account for Dinos rolled
                self.diceList.remove(randRoll.color)
                dinoCounter += 1
            elif randRoll.get_top() == 'Feet':
                self.diceList.remove(randRoll.color)
                feetCounter += 1

        print('This turn so far: ' + str(dinoCounter) + ' dinos and ' + str(feetCounter) + ' feet.')

        while turnEnd == False:
            if feetCounter < 3:

                print('\nYou have ' + str(len(self.diceList)) + ' dice remaining.')
                print(self.count_color('Green') + ' green, ' + self.count_color('Yellow') + ' yellow, and ' + self.count_color('Red') + ' red.')
                decision = input('(y/n) to decide to roll again: ')
                
                if decision == 'n':
                    self.points += dinoCounter
                    return

                for i in range(3):
                    randRoll = DinoDie(self.diceList[random.randrange(len(self.diceList))])    # get a random index for random choosing, then roll the corresponding DinoDie
                    print('A ' + randRoll.color + ' Dino die with a ' + randRoll.get_top() + ' on top.')
                    if randRoll.get_top() == 'Dinos':    # account for Dinos rolled
                        self.diceList.remove(randRoll.color)
                        dinoCounter += 1
                    elif randRoll.get_top() == 'Feet':
                        self.diceList.remove(randRoll.color)
                        feetCounter += 1

                    if len(self.diceList) == 0:
                        self.points += dinoCounter
                        print('You ran out of dice. Next player! ')
                        return

                print('This turn so far: ' + str(dinoCounter) + ' dinos and ' + str(feetCounter) + ' feet.')
            else:
                turnEnd = True
                print('Too bad -- you got stomped!')

def play_dino_hunt(numPlayers,numRounds):
    '''play_dino_hunt(numPlayer,numRounds)
    plays a game of Dino Hunt
      numPlayers is the number of players
      numRounds is the number of turns per player'''

    players = []    # stores DinoPlayer objects per player
    playerScores = {}    # dictionary for calculating winner (can see later on)

    for playerNum in range(1, numPlayers + 1):    # get names
        players.append(DinoPlayer(input('Player {}, please enter your name: '.format(str(playerNum)))))

    for roundNum in range(1, numRounds + 1):    # perform rounds
        print('\n\nROUND {}\n\n'.format(str(roundNum)))
        for i in range(numPlayers):
            players[i].take_turn()    # can check DinoPlayer class for take_turn method

    for element in players:    # prepare for calculating max score
        playerScores[element.points] = element.name

    print('\n\nWe have a winner!')
    print(playerScores[max(playerScores.keys())] + ' has ' + str(max(playerScores.keys())) + ' points.')
        
    
play_dino_hunt(2,2)