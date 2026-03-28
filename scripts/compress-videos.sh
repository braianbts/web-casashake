#!/bin/bash

INPUT_DIR="./public"
OUTPUT_DIR="./public/compressed"

mkdir -p "$OUTPUT_DIR"

find "$INPUT_DIR" -type f \( -iname "*.mov" -o -iname "*.mp4" \) -print0 | while IFS= read -r -d '' file; do
  filename=$(basename "$file")
  name="${filename%.*}"

  # evitar recomprimir los ya generados dentro de /compressed
  if [[ "$file" == *"/compressed/"* ]]; then
    continue
  fi

  echo "▶️ Comprimiendo: $file"

  ffmpeg -nostdin -y -i "$file" \
    -vf "scale='min(1920,iw)':-2" \
    -c:v libx264 \
    -preset medium \
    -crf 28 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    "$OUTPUT_DIR/${name}.mp4"

  echo "✅ Listo: $OUTPUT_DIR/${name}.mp4"
done

echo "🎉 Todos los videos fueron procesados."