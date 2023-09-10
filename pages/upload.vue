<script>
import Tesseract from 'tesseract.js'

export default {
  data() {
    return {
      imageUrl: null,
      fileName: null,
      extractedText: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.imageUrl = reader.result
        this.fileName = file.name
      }
      reader.readAsDataURL(file)
    },
    deleteImage() {
      this.imageUrl = null
      this.fileName = null
      this.extractedText = null
      // Clear the file input element to allow selecting the same file again
      const input = document.getElementById('image-upload')
      input.value = ''
    },
    runOCR() {
      Tesseract.recognize(this.imageUrl)
        .then((result) => {
          this.extractedText = result.text
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<template>
  <div class="bg-gray-900 p-8 flex flex-col items-center justify-center h-screen">
    <label
      for="image-upload" class="
        bg-gray-700
        text-gray-100
        px-4
        py-2
        rounded-md
        cursor-pointer
        hover:bg-gray-600
        transition-colors
        duration-200
        ease-in-out
      "
    >
      <span class="text-lg font-medium">Upload Image</span>
    </label>
    <input id="image-upload" type="file" class="hidden" @change="handleFileUpload">
    <img v-if="imageUrl" :src="imageUrl" class="mt-8">
    <div v-if="imageUrl">
      <p class="text-gray-400 mt-4">
        {{ fileName }}
      </p>
      <button
        class="
          bg-red-600
          text-gray-100
          px-4
          py-2
          rounded-md
          mt-4
          hover:bg-red-500
          transition-colors
          duration-200
          ease-in-out
        " @click="deleteImage"
      >
        Delete Image
      </button>
      <button
        class="
          bg-purple-600
          text-gray-100
          px-4
          py-2
          rounded-md
          mt-4
          hover:bg-purple-500
          transition-colors
          duration-200
          ease-in-out
        " @click="runOCR"
      >
        Run OCR
      </button>
      <p v-if="extractedText" class="text-gray-100 mt-4">
        {{ extractedText }}
      </p>
    </div>
  </div>
</template>
