#!/bin/zsh

OUTPUT_FILE="projektstruktur_mit_inhalt.txt"

# agent.txt zuerst erfassen
echo "Inhalt von agent.txt:" > $OUTPUT_FILE
cat ./agent.txt >> $OUTPUT_FILE

# brain.txt danach
echo "\n\nInhalt von brain.txt:" >> $OUTPUT_FILE
cat ./brain.txt >> $OUTPUT_FILE

# progress.txt danach
echo "\n\nInhalt von progress.txt:" >> $OUTPUT_FILE
cat ./progress.txt >> $OUTPUT_FILE

# Weitere Dateien aus client und server hinzufügen
echo "\n\nProjektstruktur und Inhalte Client:" >> $OUTPUT_FILE
find ./client -name node_modules -prune -o -type f -exec sh -c 'echo "\n{}:\n" && cat "{}"' \; >> $OUTPUT_FILE

echo "\n\nProjektstruktur und Inhalte Server:" >> $OUTPUT_FILE
find ./server -name node_modules -prune -o -type f -exec sh -c 'echo "\n{}:\n" && cat "{}"' \; >> $OUTPUT_FILE

echo "agent.txt, brain.txt, progress.txt und weitere Dateien wurden erfolgreich in $OUTPUT_FILE gespeichert."

