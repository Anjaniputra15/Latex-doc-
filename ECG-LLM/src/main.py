#!/usr/bin/env python3
"""
ECG-LLM Main Entry Point
========================

Quick demo of the ECG-LLM system capabilities.
Run this to see the complete ViT-ECG + LLM pipeline in action.

Usage:
    python src/main.py
"""

def main():
    print("🚀 ECG-LLM: AI-Powered ECG Analysis System")
    print("=" * 50)
    print()
    print("📋 System Components:")
    print("  ✅ Signal Processing & PQRST Delineation")
    print("  ✅ Vision Transformer (ViT) ECG Classification")
    print("  ✅ LLM Clinical Report Generation")
    print("  ✅ End-to-End Pipeline Integration")
    print()
    print("📊 Dataset Support:")
    print("  • PTB-XL Dataset (21,837 patients)")
    print("  • 12-lead ECG Analysis")
    print("  • 5-class Cardiac Classification")
    print()
    print("🔧 Quick Setup:")
    print("  1. Download PTB-XL: python scripts/download_ptb_xl_colab.py")
    print("  2. Train ViT Model: python scripts/train_vit_ecg.py")
    print("  3. Set API Keys: export OPENAI_API_KEY='your-key'")
    print("  4. Run Pipeline: python src/pipeline/ecg_complete_pipeline.py")
    print()
    print("🧪 For Testing:")
    print("  python test_system.py --mode quick")
    print()
    print("📖 Documentation: docs/README.md")
    print("🐙 GitHub: https://github.com/yourusername/ECG-LLM")

if __name__ == "__main__":
    main()