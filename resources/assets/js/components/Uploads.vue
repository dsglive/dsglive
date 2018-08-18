<template>
  <v-container fluid>
    <v-layout 
      row 
      wrap
    >
      <v-spacer/>
      <v-btn 
        v-if="!isOption" 
        color="blue"
        flat
      >
        <file-upload
          ref="upload"
          :post-action="postAction"
          :put-action="putAction"
          :name="fileKey"
          :extensions="extensions"
          :accept="accept"
          :multiple="multiple"
          :directory="directory"
          :size="size || 0"
          :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
          :headers="headers"
          :data="data"
          :drop="drop"
          :drop-directory="dropDirectory"
          :add-index="addIndex"
          v-model="files"
          style="cursor:pointer;margin:10px;"
          @input-filter="inputFilter"
          @input-file="inputFile"
        >
          Choose Files
        </file-upload>
      </v-btn>
      <v-btn 
        v-else
        flat 
        icon 
        color="red darken-4" 
        @click.native="isOption = !isOption"
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn 
        v-if="!isOption"
        flat 
        icon 
        color="amber lighten-2" 
        @click.native="isOption = !isOption"
      >
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-layout>
    
    <v-data-table
      v-if="!isOption"
      :headers="th"
      :items="files"
      :light="true"
      :rows-per-page-items="perPageData"
      no-data-text="Click `Choose Files` Button To Upload Files."
    >
      <template 
        slot="items" 
        slot-scope="props"
      >

        <td class="title text-xs-left primary--text">
          <img 
            v-if="props.item.thumb" 
            :src="props.item.thumb" 
            width="40" 
            height="auto" 
          >
          <span v-else>No Image</span>
        </td>
        <td class="title text-xs-left primary--text">
          <v-edit-dialog
            large
            lazy
          >
            <span class="primary--text">{{ props.item.name | truncate(20) }}</span>
            <div 
              slot="input" 
              class="mt-3 text-xs-center title primary--text"
            >
              Update Name
            </div>

            <v-text-field
              slot="input"
              v-model="props.item.name"
              :rules="[maxInput]"
              label="Edit"
              single-line
              counter
              autofocus
            />

          </v-edit-dialog>
        </td>
        <td class="title text-xs-left primary--text">{{ props.item.size | formatSize }}</td>
        <td class="title text-xs-left primary--text">
          <v-progress-circular
            v-if="props.item.active || props.item.progress !== '0.00'"
            :size="45"
            :width="5"
            :rotate="360"
            :value="progress(props.item.progress)"
            color="teal"
          >
            <span class="caption">{{ progress(props.item.progress) }}</span>
          </v-progress-circular>
        </td>
        <!-- status -->
        <td 
          v-if="props.item.error" 
          class="title text-xs-left primary--text"
        >
          {{ props.item.error }}
        </td>
        <td 
          v-else-if="props.item.success" 
          class="title text-xs-left primary--text"
        >
          success
        </td>
        <td 
          v-else-if="props.item.active" 
          class="title text-xs-left primary--text"
        >
          active
        </td>
        <td 
          v-else 
          class="title text-xs-left primary--text"
        />

        <td class="title text-xs-center primary--text">
          <v-btn 
            v-if="props.item.active" 
            flat 
            icon
            color="red darken-4" 
            @click.native="props.item.active ? $refs.upload.update(props.item, {error: 'cancel'}) : false"
          >
            <v-icon>fa-times</v-icon>
          </v-btn>
          <v-btn 
            v-else-if="props.item.error && props.item.error !== 'compressing' && $refs.upload.features.html5" 
            flat 
            icon 
            color="info" 
            @click.native="$refs.upload.update(props.item, {active: true, error: '', progress: '0.00'})"
          >
            <v-icon>fa-refresh</v-icon>
          </v-btn>
          <v-btn 
            v-else 
            flat 
            icon 
            color="blue"
            @click.native="props.item.success || props.item.error === 'compressing' ? false : $refs.upload.update(props.item, {active: true})"
          >
            <v-icon>fa-upload</v-icon>
          </v-btn>
          <v-btn 
            flat 
            icon 
            color="red lighten-2" 
            @click.native="remove(props.item)"
          >
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </td>
      </template>

    </v-data-table>

    <v-layout
      v-if="!isOption" 
      row 
      wrap
    >
      <v-flex 
        sm12
        md6
      >
        <v-btn 
          v-show="files.length > 0"
          dark 
          block
          flat
          color="teal lighten-2" 
          @click.native="$refs.upload.active = true"
        >
          Start Upload 
          <v-icon 
            right 
          >
            play_arrow
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex 
        sm12
        md6
      >
        <v-btn 
          v-show="$refs.upload && $refs.upload.active"
          dark 
          block
          flat
          color="error" 
          @click.native="$refs.upload.active = false"
        >
          Stop Upload 
          <v-icon 
            right
          >
            stop
          </v-icon>
        </v-btn>
        <v-btn 
          v-if="$refs.upload && !$refs.upload.active && files.length > 0"
          dark 
          block
          flat
          color="red lighten-2"
          @click.native="files = []"
        >
          Remove All Files 
          <v-icon 
            right
          >
            fa-trash
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout 
      v-if="isOption" 
      row 
      wrap
    >
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model="accept"
          :light="true"
          :error-messages="errors.collect('mime-type')"
          append-icon="fa-file-code-o "
          label="Accept"
          color="info"
          hint="Allow upload mime type"
          persistent-hint
          data-vv-name="mime-type"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model="extensions"
          :light="true"
          :error-messages="errors.collect('extension')"
          append-icon="fa-cogs"
          label="Extensions"
          color="info"
          hint="Allow upload file extension"
          persistent-hint
          data-vv-name="extension"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-model="putAction"
          :light="true"
          append-icon="http"
          label="Put Url"
          color="info"
          hint="Disabled if Empty, After the shutdown, use the POST method to upload"
          persistent-hint
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model="postAction"
          :light="true"
          :error-messages="errors.collect('post-url')"
          append-icon="http"
          label="Post Url"
          color="info"
          hint="Default Post URL"
          persistent-hint
          data-vv-name="post-url"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required|numeric|min_value:1'"
          v-model="thread"
          :light="true"
          :error-messages="errors.collect('thread')"
          append-icon="fa-cubes"
          label="Thread"
          color="info"
          hint="Also upload the number of files at the same time (number of threads)"
          persistent-hint
          data-vv-name="thread"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model.number="size"
          :light="true"
          :error-messages="errors.collect('max-size')"
          append-icon="trending_up"
          label="Max size"
          color="info"
          hint="Size Unit in byte"
          persistent-hint
          data-vv-name="max-size"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model.number="minSize"
          :light="true"
          :error-messages="errors.collect('min-size')"
          append-icon="trending_down"
          label="Min size"
          color="info"
          hint="Size Unit in byte"
          persistent-hint
          data-vv-name="min-size"
        />
      </v-flex>
      <v-flex xs12>
        <v-text-field
          v-validate="'required'"
          v-model.number="autoCompress"
          :light="true"
          :error-messages="errors.collect('auto-compress')"
          append-icon="fa-compress"
          label="Automatically compress"
          color="info"
          data-vv-name="auto-compress"
        />
        <p 
          v-if="autoCompress > 0"
          class="grey--text caption"
        >
          More than {{ autoCompress | formatSize }} files are automatically compressed
        </p>
        <p 
          v-else 
          class="grey--text caption"
        >
          Set up automatic compression
        </p>
      </v-flex>
      <v-flex xs12>
        <v-checkbox 
          :label="`Drag and drop upload: ${drop.toString()}`"
          v-model="drop" 
          light
        />
      </v-flex>
      <v-flex xs12>
        <v-checkbox 
          :label="`Not checked, filter the dragged folder: ${dropDirectory.toString()}`" 
          v-model="dropDirectory" 
          light
        />
      </v-flex>
      <v-flex xs12>
        <v-checkbox 
          :label="`Automatically activate upload: ${uploadAuto.toString()}`" 
          v-model="uploadAuto"
          light
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ImageCompressor from "@xkeshi/image-compressor";
import FileUpload from "vue-upload-component";
export default {
  components: {
    FileUpload
  },
  props: {
    fileKey: {
      type: String,
      required: true
    },
    putUrl: {
      type: String,
      default: ""
    },
    postUrl: {
      type: String,
      required: true
    },
    single: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      th: [
        { text: "Thumb", value: "thumb", align: "left", sortable: true },
        { text: "Name", value: "name", align: "left", sortable: true },
        { text: "Size", value: "size", align: "left", sortable: true },
        { text: "Progress", value: "progress", align: "left", sortable: true },
        { text: "Status", value: "speed", align: "left", sortable: true },
        { text: "Actions", align: "center", sortable: false }
      ],
      files: [],
      /* file config */
      accept: "image/png,image/gif,image/jpeg,image/webp",
      extensions: "gif,jpg,jpeg,png,webp",
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: "file",
      postAction: "/uploads/post",
      putAction: "/uploads/put",
      headers: {
        "X-Csrf-Token": App.csrfToken,
        /* added access token */
        Authorization: ""
      },
      data: {
        _csrf_token: App.csrfToken
      },
      autoCompress: 1024 * 1024,
      uploadAuto: false,
      /* file option */
      isOption: false,
      /* file name validation */
      maxInput: v => v.length <= 30 || "Input too long!",
      /* file per page */
      perPageData: [10, 25, 50, { text: "All", value: -1 }]
    };
  },
  watch: {
    fileKey(newValue) {
      this.name = newValue;
    }
  },
  mounted() {
    this.postAction = this.postUrl ? this.postUrl : "/uploads/post";
    this.putAction = this.putUrl ? this.putUrl : null;
    this.headers["Authorization"] = `Bearer ${vm.$auth.token()}`;
    if (this.single === true) {
      this.multiple = false;
    } else {
      this.multiple = true;
    }
  },
  methods: {
    progress(props) {
      return Math.round(props);
    },
    remove(file) {
      this.$refs.upload.remove(file);
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }

        // Automatic compression
        // 自动压缩
        if (
          newFile.file &&
          newFile.type.substr(0, 6) === "image/" &&
          this.autoCompress > 0 &&
          this.autoCompress < newFile.size
        ) {
          newFile.error = "compressing";
          const imageCompressor = new ImageCompressor(null, {
            convertSize: Infinity,
            maxWidth: 1024,
            maxHeight: 1024
          });
          imageCompressor
            .compress(newFile.file)
            .then(file => {
              this.$refs.upload.update(newFile, {
                error: "",
                file,
                size: file.size,
                type: file.type
              });
            })
            .catch(err => {
              this.$refs.upload.update(newFile, {
                error: err.message || "compress"
              });
            });
        }
      }

      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }

        // Thumbnails
        // 缩略图
        newFile.thumb = "";
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob;
        }
      }
    },

    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update

        if (newFile.active && !oldFile.active) {
          // beforeSend

          // min size
          if (
            newFile.size >= 0 &&
            this.minSize > 0 &&
            newFile.size < this.minSize
          ) {
            this.$refs.upload.update(newFile, { error: "size" });
          }
        }

        if (newFile.progress !== oldFile.progress) {
          // progress
        }

        if (newFile.error && !oldFile.error) {
          // error
        }

        if (newFile.success && !oldFile.success) {
          //! PUSH TO ARRAY NEW IMAGES, We Can Use This TO Display at Package
          let link = newFile.response[this.fileKey];
          if (this.fileKey === "damaged_images") {
            if (this.item.damaged_images === null) {
              this.item.damaged_images = [];
            }
            this.item.damaged_images.push(link);
          }
          if (this.fileKey === "package_images") {
            if (this.item.package_images === null) {
              this.item.package_images = [];
            }
            this.item.package_images.push(link);
          }
        }
      }

      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }

      // Automatically activate upload
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    }
  }
};
</script>