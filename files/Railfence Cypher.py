#Railfence Cypher

def encipher_fence(plaintext, numRails):
    '''encipher_fence(plaintext,numRails) -> str
    encodes plaintext using the railfence cipher
    numRails is the number of rails'''

    textList = list(plaintext)
    result = ''

    # evaluates rails and joins them in reverse order
    for i in range(numRails - 1, -1, -1):    # i per rail number iteration
        scrambleStr = ''
        for n in range(i, len(textList) , numRails):    # n per n'th character after i
            scrambleStr += textList[n]
        result += scrambleStr

    return result

def decipher_fence(ciphertext, numRails):
    '''decipher_fence(ciphertext,numRails) -> str
    returns decoding of ciphertext using railfence cipher
    with numRails rails'''

    textList = list(ciphertext)
    result = ''
    
    railsDict = {}
    
    startPoint = 0

    # separates the rails
    for i in range(numRails - 1, -1, -1):    # i per rail number iteration
        stopPoint = len(range(i, len(textList) , numRails))    # how many characters should be in the i'th rail
        railsDict[i] = textList[startPoint:(startPoint+stopPoint)]
        startPoint += stopPoint

    # combines separated rails
    while len(result) != len(textList):
        for rail in range(0, numRails):
            if len(result) != len(textList):
                result += railsDict[rail].pop(0)
                
    return result

def decode_text(ciphertext, wordfilename):
    '''decode_text(ciphertext,wordfilename) -> str
    attempts to decode ciphertext using railfence cipher
    wordfilename is a file with a list of valid words'''

    textList = list(ciphertext)
    maxWordsDict = {}   # for storing number of valid words until reaching rail 10
    result = ''
    
    notDecoded = True
    numRails = 2
    
    while notDecoded:
        wordFile = open(wordfilename, 'r')  # placed here to restart line list when comparing words and terms later
        validWords = 0
        resultTemp = ''
    
        railsDict = {}
        
        
        startPoint = 0

        # separates the rails
        for i in range(numRails - 1, -1, -1):    # i per rail number iteration
            stopPoint = len(range(i, len(textList) , numRails))    # how many characters should be in the i'th rail
            railsDict[i] = textList[startPoint:(startPoint+stopPoint)]
            startPoint += stopPoint

        # combines separated rails
        while len(resultTemp) != len(textList):
            for rail in range(0, numRails):
                if len(resultTemp) != len(textList):
                    resultTemp += railsDict[rail].pop(0)
        
        resultEdit = resultTemp    
        resultEdit = resultEdit.lower().split()

        # checks how many valid words in string
        for line in wordFile:
            line = list(line)
            line.remove('\n')
            word = ''.join(line)
            for term in resultEdit:
                if word == term:
                    validWords += 1
        
        # accounts for words with symbols
        for term in resultEdit:
            if term.isalpha() == False:
                validWords += 1    # assuming that in scenario, this word will be right
 
        # checks if all terms in string are valid words
        if validWords == len(resultEdit):
            result = resultTemp
            notDecoded = False
        elif numRails == 10:   # assume no more than 10 rails
            result = maxWordsDict[max(maxWordsDict.keys())]    # uses string that results in maximum valid words
            notDecoded = False
        else:
            maxWordsDict[validWords] = resultTemp
            
        numRails += 1
        
        wordFile.close()

    return result

# test cases

# enciphering
print(encipher_fence("Type String", 3))
# should print: cfibehadg
print(encipher_fence("This is a test.", 2))
# should print: hsi  etTi sats.
print(encipher_fence("This is a test.", 3))
# should print: iiae.h  ttTss s
print(encipher_fence("Happy birthday to you!", 4))
# should print: pidtopbh ya ty !Hyraou

# deciphering
print(decipher_fence("hsi  etTi sats.",2))
# should print: This is a test.
print(decipher_fence("iiae.h  ttTss s",3))
# should print: This is a test.
print(decipher_fence("pidtopbh ya ty !Hyraou",4))
# should print: Happy birthday to you!

# decoding
print(decode_text(" cr  pvtl eibnxmo  yghu wou rezotqkofjsehad", 'wordlist.txt'))
# should print: the quick brown fox jumps over the lazy dog
print(decode_text("unt S.frynPs aPiosse  Aa'lgn lt noncIniha ", 'wordlist.txt'))
# should print... we'll let you find out!
