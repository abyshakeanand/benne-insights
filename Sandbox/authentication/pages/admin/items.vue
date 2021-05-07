<template>
    <div class="">
        <div class="">
            <nuxt-child :key="$router.fullPath"></nuxt-child>  
        </div>
        <div class="">
            <div class="">
                <ul>
                    <li v-for="(item, key) in items" :key="key">
                        <span class="">{{ item.name }}</span>
                        <div @click="deleteItem" class="">Delete</div>
                    </li>
                </ul>
            </div>
            <div class="">
                <input type="text" @keyup.enter="addItem" name="item" label="Add new item" v-model="item" class="" />
                <button @click="addItem">Add Item</button>
            </div>
        </div>
    </div>

</template>

<script>
import { firestore } from '@/utils/fireinit.js'
export default {
    asyncData({store}) {
        return {
            //queryRef: firestore.collection('items').doc('${store.state.user.uid}'),
            itemsRef: firestore.collection('items').doc('${store.state.user.uid}')
        }
    },
    data () {
        return {
            item: '',
            items: {}
        }
    },
    created () {
        const observer = this.itemsRef.onSnapshot(docSnapshot => {
            console.log(`Received doc snapshot: ${docSnapshot}`);
            // ...
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    },
    methods: {
        addItem () {
            this.itemsRef.set({
                name: this.item
            }).then(() => {
                this.item = ''
            })
        },
        deleteItem() {
            this.itemsRef.delete();
            //this.itemsRef.child(key).remove()
        }
    }
}
</script>

<style>

</style>