# Scripts Directory

## Training Scripts
- `train_vit_ecg.py` - ViT-ECG model training
- `download_ptb_xl_colab.py` - PTB-XL dataset downloader

## Usage
```bash
# Download dataset
python scripts/download_ptb_xl_colab.py

# Train model
python scripts/train_vit_ecg.py --config configs/training.json
```